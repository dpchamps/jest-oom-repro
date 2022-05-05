
  describe("some-evil-spec=872", () => {
    it("evil-block-872", () => {
      window.evil_872 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  