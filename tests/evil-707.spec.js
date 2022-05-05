
  describe("some-evil-spec=707", () => {
    it("evil-block-707", () => {
      window.evil_707 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  