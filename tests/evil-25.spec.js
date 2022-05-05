
  describe("some-evil-spec=25", () => {
    it("evil-block-25", () => {
      window.evil_25 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  