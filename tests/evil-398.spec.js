
  describe("some-evil-spec=398", () => {
    it("evil-block-398", () => {
      window.evil_398 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  