
  describe("some-evil-spec=245", () => {
    it("evil-block-245", () => {
      window.evil_245 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  