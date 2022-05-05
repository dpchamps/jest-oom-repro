
  describe("some-evil-spec=512", () => {
    it("evil-block-512", () => {
      window.evil_512 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  