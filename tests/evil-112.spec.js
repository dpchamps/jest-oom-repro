
  describe("some-evil-spec=112", () => {
    it("evil-block-112", () => {
      window.evil_112 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  