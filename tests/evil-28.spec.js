
  describe("some-evil-spec=28", () => {
    it("evil-block-28", () => {
      window.evil_28 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  