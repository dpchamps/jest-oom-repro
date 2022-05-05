
  describe("some-evil-spec=282", () => {
    it("evil-block-282", () => {
      window.evil_282 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  