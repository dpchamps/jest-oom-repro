
  describe("some-evil-spec=403", () => {
    it("evil-block-403", () => {
      window.evil_403 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  