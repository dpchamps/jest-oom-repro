
  describe("some-evil-spec=20", () => {
    it("evil-block-20", () => {
      window.evil_20 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  