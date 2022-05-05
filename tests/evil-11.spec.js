
  describe("some-evil-spec=11", () => {
    it("evil-block-11", () => {
      window.evil_11 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  