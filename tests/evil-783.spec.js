
  describe("some-evil-spec=783", () => {
    it("evil-block-783", () => {
      window.evil_783 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  