
  describe("some-evil-spec=379", () => {
    it("evil-block-379", () => {
      window.evil_379 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  