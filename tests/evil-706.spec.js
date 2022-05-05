
  describe("some-evil-spec=706", () => {
    it("evil-block-706", () => {
      window.evil_706 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  