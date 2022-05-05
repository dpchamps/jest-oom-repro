
  describe("some-evil-spec=539", () => {
    it("evil-block-539", () => {
      window.evil_539 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  