
  describe("some-evil-spec=890", () => {
    it("evil-block-890", () => {
      window.evil_890 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  