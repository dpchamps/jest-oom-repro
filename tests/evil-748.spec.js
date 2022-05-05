
  describe("some-evil-spec=748", () => {
    it("evil-block-748", () => {
      window.evil_748 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  