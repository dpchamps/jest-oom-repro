
  describe("some-evil-spec=370", () => {
    it("evil-block-370", () => {
      window.evil_370 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  