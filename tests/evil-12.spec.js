
  describe("some-evil-spec=12", () => {
    it("evil-block-12", () => {
      window.evil_12 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  