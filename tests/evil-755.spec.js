
  describe("some-evil-spec=755", () => {
    it("evil-block-755", () => {
      window.evil_755 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  