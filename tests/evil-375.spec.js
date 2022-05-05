
  describe("some-evil-spec=375", () => {
    it("evil-block-375", () => {
      window.evil_375 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  